<template>
    <div class="mainGraph" id="mainGraph">
        <div class="headerGraph">Growth in Earnings/Career Throughout the Years</div>
        <div class="displayGraph" id="earningsDisplay">            
        </div>
    </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IndividualState, Growth } from '../../../types/modules/individualTypes'
import * as d3 from 'd3'

const margin = {top: 10, right: 30, bottom: 30, left: 50}
const width = 447 - margin.left - margin.right
const height = 282 - margin.top - margin.bottom

// missing grid line, fix interface, hover possibly


@Component
export default class Graph extends Vue { 
    
    // eslint-disable-next-line
    @Prop() growth!: IndividualState | any
    @Prop() growthMax!: number[]
    
    mounted() {
        const maxYear = this.growthMax[0]
        const maxSalary = this.growthMax[1]        

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
            .domain([0, maxYear])                                                
        const xAxis = svg.append('g')
            .attr("transform", "translate(0," + height + ")")                                                                        
            .call(d3.axisBottom(x)                
                .tickPadding(10)
                .ticks(5)
                .tickSize(0)                            
            )                      
            xAxis.selectAll("path")
                .style("stroke", '#BFC1DA')                                    
            xAxis.selectAll('text')
                .style("stroke", '#2A2C50')
                .style("stroke-width", '0.1')

        // y val
        const y = d3.scaleLinear()
            .domain([0, maxSalary])
            .range([height, 0])            
        const yAxis = svg.append('g')
            // .attr("stroke-dasharray", "0,1")                
            .call(d3.axisLeft(y)
                .tickPadding(10)
                .ticks(5)
                .tickSize(0)                
            )                     
            yAxis.selectAll('path')
                .style('stroke', 'white')
            yAxis.selectAll('text')
                .style("stroke", '#2A2C50')
                .style("stroke-width", '0.1')            
        
        // initial area y = 0:        
        const initialarea = d3.area()
            .x(0)
            .y0(height)
            .y1(height);     
        
        // the area in its final state
        const area = d3.area<{year: number; salary: number}>()
            .x(function(d) { return x(d.year) })
            .y0(height)
            .y1(function(d) { return y(d.salary) })  

        // fill area
        svg.append('path')
            .datum(this.growth)
            .attr("fill", "url(#svgGradient)")                                    
            .attr("class", "area")
            .attr("d", initialarea) // initial state (line at the bottom)
            .transition().duration(1500)
            .attr("d", area); // final state
        
        // add line    
        const initline = d3.line()
            .x(0)
            .y(height)                     
        const finalline = d3.line<{year: number; salary: number}>()  
            .x(function(d){return x(d.year)})                
            .y(function(d){return y(d.salary)})  

        svg.append('path')
            .datum(this.growth)
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
            .style('position', 'absolute')     
                                                                                   
        // eslint-disable-next-line
        const mouseover: any = function(d: Growth) {
            tooltip    
            .style("opacity", 0)            
            .transition()
            .duration(1000)
            .style("opacity", 1)                    
        }
        // eslint-disable-next-line
        const mousemove = function(d: any) {
            tooltip
            .html(
              `${d.title}
                <br/>
                $ ${d.salary}
                `
            )                          
            .style("left", (d3.event.pageX + "px"))
            .style("top", (d3.event.pageY+5 + "px"))
        }

        // add dots
        svg.append('g')
            .selectAll('dot')
            .data(this.growth)            
            .enter()
            .append("circle")
                .attr("cx", 0)
                .attr("cy", height)                
                .transition()
                .duration(1500) 
                // eslint-disable-next-line
                .attr("cx", function(d: any){return x(d.year)})
                // eslint-disable-next-line
                .attr("cy", function(d: any){return y(d.salary)})
                .attr("r", 3.5)                
                .attr("fill", "#24CF9A")  
                .on('end', function() {
                    d3.select(this)
                    .on("mouseover", mouseover )                    
                    .on("mousemove", mousemove )
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