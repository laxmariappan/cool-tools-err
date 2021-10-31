module.exports = {
    webpack: (config) => {
        config.resolve.fallback = { fs: false,
        child_process: false,
        net: false,
        dns: false,
        tls: false,};
    
        return config;
      },
  };