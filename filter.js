import process from 'node:process'
import fs from 'node:fs/promises'
import path from 'path'
import exit from "node:os";

const repoArg = process.argv[2]
const versionsArg = process.argv[3]
if (!repoArg || !versionsArg) {
    console.log("Usage: node filter.js [path to repo] [JSON list of versions]")
    exit(1)
}

const distros = new Set(["fedora", "rhel8", "rhel9", "rhel10", "c9s", "c10s"])

let matrix = []

const versions = JSON.parse(versionsArg)
versions.forEach(async version => {
    const files = await fs.readdir(path.join(repoArg, version))
    const presentDistros = new Set(files.filter(name => name.startsWith("Dockerfile."))
        .map(name => name.split(".")[1]))
    const excludedDistros = new Set(files.filter(name => name.startsWith(".exclude-"))
        .map(name => name.split("-")[1]))
    const missingDistros = excludedDistros.union(distros.difference(presentDistros))
    missingDistros.forEach(distro => {
        matrix.push({"version": version, "os_test": distro})
        if (distro.startsWith("rhel")) {
            matrix.push({"version": version, "os_test": `${distro}-unsubscribed`})
        }
    })
})

console.log(JSON.stringify(matrix))