<template>
    <div class="graph-main">
        <div class="graph-header">Cost of living in X Area</div>
        <div class="graph-display" id="areaCOL">            
        </div>
    </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IndividualState } from '../../../types/modules/individualTypes'
import * as d3 from 'd3'

const margin = {top: 10, right: 30, bottom: 30, left: 50}
const width = 447 - margin.left - margin.right
const height = 282 - margin.top - margin.bottom

@Component
export default class Graph extends Vue { 
    // eslint-disable-next-line
    @Prop() marketCOL!: IndividualState | any
    @Prop() marketCOLMax!: number[]
    mounted() {
        const maxYear = this.marketCOLMax[0]
        const maxCOL = this.marketCOLMax[1]

        const svg = d3.select("#areaCOL")
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', "translate(" + margin.left + "," + margin.top + ")")

        // x val
        const x = d3.scaleLinear()            
            .domain([0, 0])
            .range([0, 0])   
            
        const xAxis = svg.append('g')
            .attr('class', 'myXaxis')
            .attr("transform", "translate(0," + height + ")")                                                                        
            .call(d3.axisBottom(x)                
                .tickPadding(10)
                .ticks(5)
                .tickSize(0)                            
            )                     
            .attr('opacity', 1)
            xAxis.selectAll("path")
                .style("stroke", '#BFC1DA')                                    
            xAxis.selectAll('text')
                .style("stroke", '#2A2C50')
                .style("stroke-width", '0.1')

        // y val
        const y = d3.scaleLinear()
            .domain([0, maxCOL])
            .range([height, 0])            
        const yAxis = svg.append('g')
            // .attr("stroke-dasharray", "0,1")                
            .call(d3.axisLeft(y)
                .tickPadding(10)
                .ticks(5)
                .tickSize(0)                
            )                     
            yAxis.selectAll('path')
                .style('stroke', '#F8F8FB')
            yAxis.selectAll('text')
                .style("stroke", '#2A2C50')
                .style("stroke-width", '0.1')   
                
        // add tooltip
        const tooltip = d3.select("#areaCOL")
            .append("div")
            .style("opacity", 1)            
            .attr("class", "tooltip")
            .style("color", "#2A2C50")            
            .style("text-align", "left") 
            .style("margin", "auto")                          
                                                       
        const mouseover = function() {
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
                `💼: ${d.title} 
                <br/>
                ⌛: ${d.year} years 
                <br/>
                💸: ${d.col}`
            )            
        }          
        
        // Add dots
        svg.append('g')        
            .selectAll("dot")
            .data(this.marketCOL)
            .enter()            
            .append("circle")   
            // eslint-disable-next-line             
            .attr("cx", function(d: any) {return x(d.year)})
            // eslint-disable-next-line    
            .attr("cy", function (d: any) { return y(d.col)} )                    
            .attr("r", 3.5)
            .style("fill", "#24CF9A")
            .on("mouseover", mouseover )
            .on("mousemove", mousemove )
            

        // new X axis
        x.domain([0, maxYear])
        x.range([0, width])   
        xAxis
            .transition()
            .duration(2000)
            .attr("opacity", "1")
            .call(d3.axisBottom(x)
                .tickPadding(10)
                .ticks(5)
                .tickSize(0) 
            );

        svg.selectAll("circle")
            .transition()
            .delay(function(d,i){return(i*100)})
            .duration(2000)
            // eslint-disable-next-line    
            .attr("cx", function (d: any) { return x(d.year); } )
            // eslint-disable-next-line    
            .attr("cy", function (d: any) { return y(d.col); } ) 
            .on('end', function() {
                d3.select(this)
                .on("mouseover", mouseover )                    
                .on("mousemove", mousemove )
            })            
            
            

    }
}


</script>

<style scoped>
.graph-main {    
    display: flex;    
    flex-direction: column;     
    color: #2A2C50;        
    width: 506px;
    height: 362px;       
}
.graph-header {
    text-align: left;
    color: #2A2C50;
    font-size: 16px;
    font-weight: bold;    
}

.graph-display {    
    display: flex;
    flex-direction:column;
    margin: 28px auto auto 15px;
    width: 447px;   
}



</style>