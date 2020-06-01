<template>
    <div class="pie-main">        
        <div class="pie-display" id="expensePie">            
        </div>
    </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { TableList } from '../../../types/modules/individualTypes'
import * as d3 from 'd3'
const width = 305 
const height = 305
const radius = Math.min(width, height)/2

@Component
export default class Pie extends Vue { 
    // eslint-disable-next-line 
    @Prop() tableItems!: Array<TableList> | any
    @Prop() totalAmount!: number    

    mounted() {

        const svg = d3.select("#expensePie")
        .append("svg")
            .attr("width", width)
            .attr("height", height)
        .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        // set the color scale
        const color = d3.scaleOrdinal()            
            .range(["#3D4857", "#FC7D58", "#22B0FC", "#7557E5", "#a05d56"])

//         // Compute the position of each group on the pie:
        const arc = d3.arc()
            .innerRadius(100)
            .outerRadius(radius)
        const pie = d3.pie()
            .sort(null)
            .startAngle(1.1 * Math.PI)
            .endAngle(3.1 * Math.PI)
            // eslint-disable-next-line 
            .value(function(d: any) {                
                return d.amount
            });       
        
        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        const g = svg.selectAll('.arc')
            .data(pie(this.tableItems))
            .enter()
            .append('g')
            .attr('class', 'arc')
        g.append("path")
        // eslint-disable-next-line 
        .style("fill", function(d, i: any): any { return color(i); })
        .transition().duration(1500)
        // eslint-disable-next-line 
        .attrTween('d', function(d: any): any {
            const i = d3.interpolate(d.startAngle+0.1, d.endAngle);
            // eslint-disable-next-line 
            return function(t: any) {
                d.endAngle = i(t);
                return arc(d);
            }
        });
            
        // text  
        g.append("text")
            .attr("text-anchor", "middle")
            .attr('font-size', '20px')                     
            .style('fill', '#2A2C50') 
            .style("stroke-width", '0')
            .text('Total Expense')
        g.append("text")
            .attr("text-anchor", "middle")
            .style('font-size', '20px')        
            .style('fill', '#2A2C50') 
            .style("stroke-width", '0')        
            .attr('y', '25px')  
            .text(`$ ${this.totalAmount}`)  
            
        // will need to set a limit on number of characters    
        // legend        
        const legend = d3.select('#expensePie')
            .append("svg")
            .attr("class", "legend")            
            .style('max-width', '165px')
            .style('margin', 'auto 0px auto auto')                                                                                           
            .selectAll("g")            
            .data(this.tableItems)
            .enter().append("g")            
            .attr("transform", function(d, i) { 
                return "translate(0," + i * 30 + ")"; 
            })                
            
        // const insertLinebreaks = function (d) {
        //     const el = d3.select(this);
        //     const words = d.category.split(' ');
        //     el.text('');

        //     for (let i = 0; i < words.length; i++) {
        //         const tspan = el.append('tspan').text(words[i]);
        //         if (i > 0)
        //             tspan.attr('x', 25).attr('dy', '15');
        //     }
        // };            
        legend.append("circle")  
            .transition()
            .duration(1000)            
            .attr("cx", 10)          
            .attr("cy", 10)
            .attr("r", 6)              
            .attr('borderRadius', 100)  
            // eslint-disable-next-line            
            .style("fill", function(d, i: any): any {
                return color(i);
            });

        legend.append("text")
            .style('opacity', '0')            
            .attr("x", 24)
            .attr("y", 9)  
            .attr("dy", ".35em")    
            .style('font-weight', 'bold')                        
            .transition()
            .duration(1000)        
            .style('opacity', '1')
            // eslint-disable-next-line 
            .style("fill", function(d, i: any): any {                
                return color(i);
            }) 
            // .each(insertLinebreaks)     
            // eslint-disable-next-line             
            .text(function(d: any) { return d.category });   
                                 
    }    
}
    

</script>

<style scoped>
.pie-main {    
    display: flex;    
    flex-direction: column;     
    color: #2A2C50;        
    width: 506px;
    height: 362px;        
}
.pie-display {    
    display: flex;
    margin: 0px auto;
    width: 500px;  
    
}




</style>