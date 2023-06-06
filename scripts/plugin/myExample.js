export default function myExample () {
    return {
      name: 'my-example', // 此名称将出现在警告和错误中
      outputOptions ( outputOptions ) {
        console.log("=====",outputOptions);
        return outputOptions;
      },
      generateBundle(options, bundle, isWrite){
         console.log("bundle==",bundle);
      },
    };
  }