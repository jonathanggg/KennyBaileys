const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(
    `\n❌ Este baileys requiere Node.js 20+ para correr.\n` +
    `   Tu estas usando Node.js ${process.versions.node}.\n` +
    `   Porfavor actualiza a Node.js 20+ para que funcione correctamente.\n`
  );
  process.exit(1);
}
