<template>
    <div class="">
        <h2>Dashboard</h2>

    </div>

    <div id="chart"></div>

</template>

<script lang="ts">
import { onMounted  } from 'vue';
import axios, { Axios } from 'axios';
import * as c3 from 'c3';
export default {
    name:"DasboardPage",

    setup(){
        onMounted(async () => {
            const chart = c3.generate({
                bindto:'#chart',
                data:{
                    x:'x',
                    columns:[
                        ['x'],
                        ['sales']
                    ],
                    type:'bar'
                },
                
                axis:{
                    x:{
                    type:'timeseries',
                    tick:{
                        format:'%Y-%m-%d'
                    }
                }
            }
            });

            const {data} = await axios.get('chart')

            chart.load({
                columns:[
                    ['x',...data.map(( r :any)=> r.Date)],
                    ['sales',...data.map((r:any)  => r.sum)]

                ]
            })


        });



    }

}
</script>

<style>

</style>