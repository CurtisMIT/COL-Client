
<template>
    <div class="input-main">
        <div class="input-title">
            Job Title
        </div>                
        <div class="input-container">          
          <div class="autosuggest-container">
            <vue-autosuggest
              v-model="query"
              :suggestions="filteredOptions"
              @focus="focusMe"              
              @input="onInputChange"
              @selected="onSelected"
              :get-suggestion-value="getSuggestionValue"
              :input-props="inputProps"
              >              
              <div slot-scope="{suggestion}" >          
                <div >
                  {{suggestion.item.name}}</div>
              </div>              
            </vue-autosuggest>
          </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { VueAutosuggest }from "vue-autosuggest";

@Component({
    components: {
        VueAutosuggest
    },
    data() {
    return {
      query: "",
      selected: "",      
      // populate suggestions from db
      suggestions: [
        {
          data: [
            { id: 1, name: "Product Designer", },
            { id: 2, name: "Software Developer",},
            { id: 3, name: "HR Manager",},          
          ]
        }
      ],
      inputProps: {
          id:'autosuggest__input',          
          placeholder: "Select a job title",                    
          style: {
              height: '50px',
              width: '328px',
              borderRadius: '10px',
              backgroundColor: '#ECECF2',
              border: 'none',
              fontSize: '16px',  
              textIndent: '20px',
              outline: 'none',                
              marginRight: '200px',
              color: "#2C2C2C"                            
            }
      }
    };
  },
  computed: {
    filteredOptions() {
      return [
        { 
          data: this.suggestions[0].data.filter(option => {
            return option.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
          })
        }
      ];
    }
  },
  methods: {    
    onSelected(item) {
      this.selected = item.item;
    },
    onInputChange(text) {
      // event fired when the input changes
      console.log(text)
    },
    /**
     * This is what the <input/> value is set to when you are selecting a suggestion.
     */
    getSuggestionValue(suggestion) {
      return suggestion.item.name;
    },
    focusMe(e) {
      console.log(e)
    }
  }
    
})
export default class Job extends Vue {
    // @Prop() private msg!: string;   
 
}
</script>

<style>
.input-main {
    display: flex;
    flex-direction: column;
    padding-top: 29px;
    padding-left: 44px;   
    width: 384px;       
}
.input-title {    
    margin: auto auto 12px 0px;
    font-size: 18px;
    font-weight: bold;
    color: #2B2C50;
}

.input-container { 
  font-family: 'Noto Sans', sans-serif;  
  width: 328px;
}
ul {
  position: absolute;
  width: 100%;
  color: rgba(30, 39, 46,1.0);
  list-style: none;
  margin-top: -10px;
  padding: 0.5rem 0 .5rem 0;
  width: 330px;
  background-color: #ECECF2;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  max-height: 168px;
  overflow-y: scroll;
}
li {
  border-top: 1px solid rgba(42,44,80, 0.13);
  border-bottom: 1px solid #ECECF2;
  margin: auto;    
  padding: 0.75rem 0 0.75rem 20px;
  display: flex;
  align-items: center;   
}
li:hover {
  border-top: 1px solid #2A2C50;
  border-bottom: 1px solid #2A2C50;
  font-weight: bold;
  cursor: pointer;
}

.autosuggest-container {
  display: flex;
  justify-content: center;
  width: 280px;
}

#autosuggest { 
  width: 100%; 
  display: block;
}

</style>