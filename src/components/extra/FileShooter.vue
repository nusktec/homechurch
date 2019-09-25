<template>
    <input ref="file" :accept="type" type="file" @change="onChange" :multiple="multiple" :hidden="hidden"/>
</template>


<script>
  /*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
  * Licensed Under MIT (http://opensource.org/licenses/MIT)
  *
  * File shooter by rscbyte.com
  *
  * refs: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
  */
  export default {
    name: 'file-shooter',
    props: {
      // Support Multiple File?
      multiple: {
        type: Boolean,
        default: false
      },
      // extensions
      type: {
        type: String,
        default: 'image/*'
      },
      // Pass the files info when it's done
      done: {
        type: Function,
        default: () => {}
      },
      //hide component
      hidden: {
        type: Boolean,
        default: true
      },
    },
    methods: {
      shooter(){
        this.$refs.file.click();
      },
      onChange(e){
        // get the files
        let files = e.target.files;
        // Process each file
        let allFiles = [];
        for (let i = 0; i < files.length; i++) {
          let file = files[i];
          // Make new FileReader
          let reader = new FileReader();
          // Convert the file to base64 text
          reader.readAsDataURL(file);
          // on reader load something...
          reader.onload = () => {
            // Make a fileInfo Object
            let fileInfo = {
              name: file.name,
              type: file.type,
              sizekl: Math.round(file.size / 1000)+' kB',
              size: Math.round(file.size / 1000),
              base64: reader.result,
              file: file
            };
            // Push it to the state
            allFiles.push(fileInfo);
            // If all files have been proceed
            if(allFiles.length === files.length){
              // Apply Callback function
              if(this.multiple) this.done(allFiles);
              else this.done(allFiles[0])
            }
          } // reader.onload
        } // for
      }, // onChange()
    }
  };
</script>
