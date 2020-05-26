<template>
    <div class="mainGraph" id="mainGraph">
        <div class="headerGraph">Growth in Earnings/Career Throughout the Years</div>
        <div class="displayGraph" id="earningsDisplay">            
        </div>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as d3 from 'd3'

const margin = {top: 10, right: 30, bottom: 30, left: 50}
const width = 447 - margin.left - margin.right
const height = 282 - margin.top - margin.bottom

// missing grid line, fix interface, hover possibly


@Component
export default class Graph extends Vue { 
    
    private career: Array<{year: any; salary: any; title: string}> = [
        {year: 0, salary: 37000, title: 'junior'},
        {year: 1, salary: 37000, title: 'junior'},
        {year: 2, salary: 45000, title: 'Sr.Manager'},
        {year: 3, salary: 49000, title: 'VP'},
        {year: 4, salary: 52000, title: 'CEO'},
        {year: 5, salary: 65000, title: 'Chairman'}        
    ]  
    
    mounted() {
        const svg = d3.select("#earningsDisplay")
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', "translate(" + margin.left + "," + margin.top + ")")
     
        // add gradients
        const defs = svg.append("defs");
        const gradient = defs.append("linearGradient")
        .attr("id", "svgGradient")
        .attr("x1", "0%")
        .attr("x2", "0%")
        .attr("y1", "0%")
        .attr("y2", "100%");

        gradient.append("stop")
        .attr('class', 'start')
        .attr("offset", "0%")
        .attr("stop-color", "#24CF9A")
        .attr("stop-opacity", 1);

        gradient.append("stop")
        .attr('class', 'end')
        .attr("offset", "100%")
        .attr("stop-color", "#24CF9A")
        .attr("stop-opacity", 0)
        
        // x val
        const x = d3.scaleLinear()            
            .range([0, width])
            .domain([0, this.career[this.career.length-1].year])                                                
        const xAxis = svg.append('g')
            .attr("transform", "translate(0," + height + ")")                                                                        
            .call(d3.axisBottom(x)                
                .tickPadding(10)
                .ticks(this.career.length)
                .tickSize(0)                            
            )                      
            xAxis.selectAll("path")
                .style("stroke", '#BFC1DA')                                    
            xAxis.selectAll('text')
                .style("stroke", '#2A2C50')
                .style("stroke-width", '0.1')

        // y val
        const y = d3.scaleLinear()
            .domain([0, this.career[this.career.length-1].salary])
            .range([height, 0])            
        const yAxis = svg.append('g')
            // .attr("stroke-dasharray", "0,1")                
            .call(d3.axisLeft(y)
                .tickPadding(10)
                .ticks(this.career.length)
                .tickSize(0)                
            )                     
            yAxis.selectAll('path')
                .style('stroke', 'white')
            yAxis.selectAll('text')
                .style("stroke", '#2A2C50')
                .style("stroke-width", '0.1')            
        
        // initial area y = 0:
        const initialarea: any = d3.area()
            .x(0)
            .y0(height)
            .y1(height);        
        // the area in its final state
        const area: any = d3.area()
            .x(function(d: any) { return x(d.year) })
            .y0(height)
            .y1(function(d: any) { return y(d.salary) });  

        // fill area
        svg.append('path')
            .datum(this.career)
            .attr("fill", "url(#svgGradient)")                                    
            .attr("class", "area")
            .attr("d", initialarea) // initial state (line at the bottom)
            .transition().duration(1500)
            .attr("d", area); // final state
        
        // add line    
        const initline: any = d3.line()
            .x(0)
            .y(height)                
        const finalline: any = d3.line()  
            .x(function(d: any){return x(d.year)})                
            .y(function(d: any){return y(d.salary)})  

        svg.append('path')
            .datum(this.career)
            .attr("fill", "none")
            .attr("stroke", "#24CF9A")
            .attr("stroke-width", 1)
            .attr("d", initline)
            .transition().duration(1500)
            .attr("d", finalline)

        // add tooltip
        const tooltip = d3.select("#earningsDisplay")
            .append("div")
            .style("opacity", 1)
            .attr("id", "tooltip")
            .style("color", "#2A2C50")            
            .style("text-align", "center") 
            .style("margin", "auto")  
            .style('font-size', '12px')        
                                                                                   

        const mouseover = function(d) {
            tooltip            
            .html(
              `${d.title}
                <br/>
                $ ${d.salary}
                `
            )              
            .style("opacity", 1)
            .style("left", (d3.event.pageX + "px"))
            .style("top", (d3.event.pageY + "px"))
        }
          
        // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
        const mouseleave = function(d) {
            tooltip
            .transition()
            .duration(200)
            .style("opacity", 0)
        }

        // add dots
        svg.append('g')
            .selectAll('dot')
            .data(this.career)            
            .enter()
            .append("circle")
                .attr("cx", 0)
                .attr("cy", height)                
                .transition()
                .duration(1500) 
                .attr("cx", function(d: any){return x(d.year)})
                .attr("cy", function(d: any){return y(d.salary)})
                .attr("r", 3.5)                
                .attr("fill", "#24CF9A")  
                .on('end', function() {
                    d3.select(this)
                    .on("mouseover", mouseover )                    
                    .on("mouseleave", mouseleave )
                })
                

                
    }
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
    color: #2A2C50;
    font-size: 16px;
    font-weight: bold;    
}

.displayGraph {
    display: flex;
    flex-direction:column;
    margin: 28px auto;
    width: 447px;;    
}


</style>