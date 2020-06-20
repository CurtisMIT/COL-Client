<template>
    <div class="graph-main">
        <div class="graph-header">Cost of living in {{location}}</div>
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
    @Prop() location!: string
    @Prop() comma!: (value: number) => string       

    mounted() {
        const maxYear = this.marketCOLMax[0]
        const maxCOL = this.marketCOLMax[1]

        const svg = d3.select("#areaCOL")
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', "translate(" + margin.left + "," + margin.top + ")")

        // grid lines before x and y 
        const y2 = d3.scaleLinear()
            .domain([0,maxCOL])
            .range([height, 0])
            .nice()  
        const yGrid = svg.append('g')
            .attr("stroke-dasharray", "4,5")                          
            .call(d3.axisLeft(y2)
               .tickSize(-width)                       
               .tickPadding(10)   
               .ticks(5)                            
            )        
            yGrid.selectAll('path')
                .style('stroke', 'white')
            yGrid.selectAll('line')
                .style('stroke', '#BFC1DA')
            yGrid.selectAll('text')
                .style('opacity', '0')
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
            .nice()           
        const yAxis = svg.append('g')
            // .attr("stroke-dasharray", "0,1")                
            .call(d3.axisLeft(y)
                .tickPadding(10)
                .tickSize(0) 
                .ticks(5)               
            )                     
            yAxis.selectAll('path')
                .style('stroke', '#F8F8FB')
            yAxis.selectAll('text')
                .style("stroke", '#2A2C50')
                .style("stroke-width", '0.1')   
                
        // add tooltip
        const tooltip = d3.select("#areaCOL")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")                         
            .style('position', 'absolute')   
            .style('padding', '15px')
            .style("margin", "auto")     
            .style('background-color', '#D7D9F0')     
            .style('border-radius', '5px') 
            .style('font-size', '14px')    
            .style("color", "#2A2C50")            
            .style("text-align", "left")                         
                                                       
        const mouseover = function() {
            tooltip
            .style("opacity", 0)            
            .transition()
            .duration(1000)
            .style("opacity", 1)
        }
        // eslint-disable-next-line
        const mousemove = (d: any) => {
            tooltip            
            .html(
                `💼: ${d.title} 
                <br/>
                ⌛: ${d.experience} years 
                <br/>
                💸: ${this.comma(d.expenses)}`
            )      
            .style("left", (d3.event.pageX+15 + "px"))
            .style("top", (d3.event.pageY-15 + "px"))      
        }          
        
        // Add dots
        svg.append('g')        
            .selectAll("dot")
            .data(this.marketCOL)
            .enter()            
            .append("circle")   
            // eslint-disable-next-line             
            .attr("cx", function(d: any) {return x(d.experience)})
            // eslint-disable-next-line    
            .attr("cy", function (d: any) { return y(d.expenses)} )                    
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
            .attr("cx", function (d: any) { return x(d.experience); } )
            // eslint-disable-next-line    
            .attr("cy", function (d: any) { return y(d.expenses); } ) 
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