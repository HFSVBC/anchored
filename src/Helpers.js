function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  return `${Math.round(bytes / 1024 ** i, 2)} ${sizes[i]}`;
}

function parseMatches(vulnerabilities) {
  const tmpMatches = {
    negligible: [],
    low: [],
    medium: [],
    high: [],
    critical: [],
  };

  Object.keys(tmpMatches).forEach((severity) => {
    tmpMatches[severity] = vulnerabilities.matches.filter((match) => (
      match.vulnerability.severity.toLowerCase() === severity
    ));
  });

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
