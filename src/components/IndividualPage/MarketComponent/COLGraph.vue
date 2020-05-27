<template>
    <div class="mainGraph">
        <div class="headerGraph">Cost of living in X Area</div>
        <div class="displayGraph" id="areaCOL">            
        </div>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as d3 from 'd3'

const margin = {top: 10, right: 30, bottom: 30, left: 50}
const width = 447 - margin.left - margin.right
const height = 282 - margin.top - margin.bottom

@Component
export default class Graph extends Vue { 
    
//     private career: Array<{year: any; salary: any; title: string}> = [
//         {year: 0, salary: 37000, title: 'junior'},
//         {year: 1, salary: 37000, title: 'junior'},
//         {year: 2, salary: 45000, title: 'Sr.Manager'},
//         {year: 3, salary: 49000, title: 'VP'},
//         {year: 4, salary: 52000, title: 'CEO'},        
//         {year: 2.5, salary: 39900, title: 'CEO'},
//         {year: 3, salary: 52000, title: 'CEO'},
//         {year: 4.5, salary: 38000, title: 'CEO'},
//         {year: 2.9, salary: 49000, title: 'CEO'},
//         {year: 3.8, salary: 33680, title: 'CEO'},
//         {year: 3.5, salary: 25990, title: 'CEO'},
//         {year: 5, salary: 65000, title: 'Chairman'},       
//         {year: 2, salary: 45000, title: 'Sr.Manager'},
//         {year: 3, salary: 49000, title: 'VP'},
//         {year: 4, salary: 52000, title: 'CEO'},        
//         {year: 2.5, salary: 39900, title: 'CEO'},
//         {year: 3, salary: 52000, title: 'CEO'},
//         {year: 4.5, salary: 38000, title: 'CEO'},
//         {year: 2.9, salary: 49000, title: 'CEO'},
//         {year: 3.8, salary: 33680, title: 'CEO'},
//         {year: 5, salary: 65000, title: 'Chairman'}, 
//                 {year: 0, salary: 17000, title: 'junior'},
//         {year: 1, salary: 38000, title: 'junior'},
//         {year: 2, salary: 49000, title: 'Sr.Manager'},
//         {year: 3, salary: 29000, title: 'VP'},
//         {year: 4, salary: 50200, title: 'CEO'},        
//         {year: 2.5, salary: 40900, title: 'CEO'},
//         {year: 3, salary: 17000, title: 'CEO'},
//         {year: 4.5, salary: 20000, title: 'CEO'},
//         {year: 2.9, salary: 27800, title: 'CEO'},
//         {year: 3.8, salary: 38380, title: 'CEO'},
//         {year: 3.5, salary: 23890, title: 'CEO'},
//         {year: 5, salary: 19000, title: 'Chairman'},       
//         {year: 2, salary: 11000, title: 'Sr.Manager'},
//         {year: 3, salary: 13000, title: 'VP'},
//         {year: 4, salary: 130230, title: 'CEO'},        
//         {year: 2.5, salary: 9900, title: 'CEO'},
//         {year: 3, salary: 47300, title: 'CEO'},
//         {year: 4.5, salary: 24800, title: 'CEO'},
//         {year: 2.9, salary: 37023, title: 'CEO'},
//         {year: 3.8, salary: 33680, title: 'CEO'},
//         {year: 5, salary: 65000, title: 'Chairman'}, 
//     ]  
    
//     mounted() {
//         const svg = d3.select("#areaCOL")
//             .append('svg')
//             .attr('width', width + margin.left + margin.right)
//             .attr('height', height + margin.top + margin.bottom)
//             .append('g')
//             .attr('transform', "translate(" + margin.left + "," + margin.top + ")")

//         // x val
//         const x = d3.scaleLinear()            
//             .domain([0, 0])
//             .range([0, 0])   
            
//         const xAxis = svg.append('g')
//             .attr('class', 'myXaxis')
//             .attr("transform", "translate(0," + height + ")")                                                                        
//             .call(d3.axisBottom(x)                
//                 .tickPadding(10)
//                 .ticks(5)
//                 .tickSize(0)                            
//             )                     
//             .attr('opacity', 1)
//             xAxis.selectAll("path")
//                 .style("stroke", '#BFC1DA')                                    
//             xAxis.selectAll('text')
//                 .style("stroke", '#2A2C50')
//                 .style("stroke-width", '0.1')

//         // y val
//         const y = d3.scaleLinear()
//             .domain([0, this.career[this.career.length-1].salary])
//             .range([height, 0])            
//         const yAxis = svg.append('g')
//             // .attr("stroke-dasharray", "0,1")                
//             .call(d3.axisLeft(y)
//                 .tickPadding(10)
//                 .ticks(5)
//                 .tickSize(0)                
//             )                     
//             yAxis.selectAll('path')
//                 .style('stroke', '#F8F8FB')
//             yAxis.selectAll('text')
//                 .style("stroke", '#2A2C50')
//                 .style("stroke-width", '0.1')   
                
//         // add tooltip
//         const tooltip = d3.select("#areaCOL")
//             .append("div")
//             .style("opacity", 1)            
//             .attr("class", "tooltip")
//             .style("color", "#2A2C50")            
//             .style("text-align", "left") 
//             .style("margin", "auto")                              
                           
                                 

//         const mouseover = function(d) {
//             tooltip
//             .style("opacity", 1)
//         }

//         const mousemove = function(d) {
//             tooltip
//             .html(
//                 `💼: ${d.title} 
//                 <br/>
//                 ⌛: ${d.year} years 
//                 <br/>
//                 💸: ${d.salary}`
//             )            
//         }
          
//         // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
//         const mouseleave = function(d) {
//             tooltip
//             .transition()
//             .duration(200)
//             .style("opacity", 0)
//         }

//         // Add dots
//         svg.append('g')        
//             .selectAll("dot")
//             .data(this.career)
//             .enter()            
//             .append("circle")            
//             .attr("cx", function(d) {return x(d.year)})
//             .attr("cy", function (d) { return y(d.salary)} )                    
//             .attr("r", 3.5)
//             .style("fill", "#24CF9A")
//             .on("mouseover", mouseover )
//             .on("mousemove", mousemove )
//             .on("mouseleave", mouseleave )

//         // new X axis
//         x.domain([0, 5])
//         x.range([0, width])   
//         svg.select(".myXaxis")
//             .transition()
//             .duration(2000)
//             .attr("opacity", "1")
//             .call(d3.axisBottom(x)
//                 .tickPadding(10)
//                 .ticks(5)
//                 .tickSize(0) 
//             );

//         svg.selectAll("circle")
//             .transition()
//             .delay(function(d,i){return(i*100)})
//             .duration(2000)
//             .attr("cx", function (d) { return x(d.year); } )
//             .attr("cy", function (d) { return y(d.salary); } ) 
//             .on("mouseover", mouseover )
//             .on("mousemove", mousemove )
//             .on("mouseleave", mouseleave )               
//     }
}


</script>

<style scoped>
.mainGraph {    
    display: flex;    
    flex-direction: column;     
    color: #2A2C50;        
    width: 506px;
    height: 362px;    
}
.headerGraph {
    text-align: left;
    color: #2A2C50;
    font-size: 16px;
    font-weight: bold;    
}

.displayGraph {    
    display: flex;
    flex-direction:column;
    margin: 28px auto;
    width: 447px;

}
.displayPosition {
    margin: auto;
    width: 447px;
    height: 282px;    
}


</style>