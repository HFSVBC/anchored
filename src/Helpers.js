function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  return `${Math.round(bytes / 1024 ** i, 2)} ${sizes[i]}`;
}

function parseMatches(vulnerabilities) {
  const tmpMatches = {};

  for (let i = 0; i < vulnerabilities.image.layers.length; i += 1) {
    tmpMatches[i] = vulnerabilities.matches.filter((match) => (
      match.artifact.locations[0].layerIndex === i
    ));
  }

  return tmpMatches;
}

function layerMatchesBySeverity(layerMatches, severity) {
  return layerMatches.filter((match) => match.vulnerability.severity.toLowerCase() === severity);
}

const Helpers = {
  bytesToSize,
  layerMatchesBySeverity,
  parseMatches,
};

export default Helpers;
