<template>
    <label class="btn btn-primary">
        upload <input type="file" hidden @change="upload($event.target.files)">
    </label>
</template>

<script >
import axios from 'axios';

export default {
    name: "ImagemUpload",
    emits: ['file-uploaded'],

    setup(_, context) {
        const upload = async (files) => {
            const file = files.item(0);

            const data = new FormData();
            data.append('image', file);

            const response = await axios.post('upload', data);

            context.emit('file-uploaded', response.data.url)

        }

        return {
            upload
        }
    }
}
</script>