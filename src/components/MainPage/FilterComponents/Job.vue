
<template>
    <div class="mainJob">
        <div class="title">
            Job Title
        </div>        
        <!-- <div class="inputJob"></div> -->        
        <div class="demo">            
            <div class="autosuggest-container">
            <vue-autosuggest
                v-model="query"
                :suggestions="filteredOptions"
                @focus="focusMe"
                @click="clickHandler"
                @input="onInputChange"
                @selected="onSelected"
                :get-suggestion-value="getSuggestionValue"
                :input-props="inputProps">
                <div slot-scope="{suggestion}" style="display: flex; align-items: center;">                
                <div style="{ display: 'flex', color: 'navyblue'}">{{suggestion.item.name}}</div>
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
      suggestions: [
        {
          data: [
            { id: 1, name: "Frodo", race: "Hobbit", avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Elijah_Wood_as_Frodo_Baggins.png/220px-Elijah_Wood_as_Frodo_Baggins.png" },
            { id: 2, name: "Samwise", race: "Hobbit", avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Sean_Astin_as_Samwise_Gamgee.png/200px-Sean_Astin_as_Samwise_Gamgee.png" },
            { id: 3, name: "Gandalf", race: "Maia", avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Gandalf600ppx.jpg/220px-Gandalf600ppx.jpg" },
            { id: 4, name: "Aragorn", race: "Human", avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Aragorn300ppx.png/150px-Aragorn300ppx.png" }
          ]
        }
      ],
      inputProps: {
          placeholder: "Select a job title",          
          style: {
              height: '52px',
              width: '328px',
              borderRadius: '10px',
              backgroundColor: '#ECECF2',
              border: 'none',
              fontSize: '16px',  
              textIndent: '20px',
              outline: 'none'                     
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
    clickHandler(item) {
      // event fired when clicking on the input
    },
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
      console.log(e) // FocusEvent
    }
  }
    
})
export default class Job extends Vue {
    // @Prop() private msg!: string;   
 
}
</script>

<style scoped>
.mainJob {
    display: flex;
    flex-direction: column;
    padding-top: 29px;
    padding-left: 44px;   
    width: 384px;       
}
.title {    
    margin: auto auto 12px 0px;
    font-size: 18px;
    font-weight: bold;
    color: #2B2C50;
}
.inputJob {
    height: 52px;
    width: 328px;
    background-color: #ECECF2;
    border-radius: 10px;
}

.demo { 
  font-family: 'Noto Sans', sans-serif;  
}

input {
  width: 384px;  
  height: 52px;  
  font-family: 'Noto Sans', sans-serif;
  border: 1px solid blue;
}

ul {
  width: 100%;
  color: rgba(30, 39, 46,1.0);
  list-style: none;
  margin: 0;
  padding: 0.5rem 0 .5rem 0;
}
li {
  margin: 0 0 0 0;
  border-radius: 5px;
  padding: 0.75rem 0 0.75rem 0.75rem;
  display: flex;
  align-items: center;
}
li:hover {
  cursor: pointer;
}

.autosuggest-container {
  display: flex;
  justify-content: center;
  width: 384px;
  height: 100px;
}

#autosuggest { 
    width: 384px; 
    display: block;}
.autosuggest__results-item--highlighted {
  background-color: rgba(51, 217, 178,0.2);
}
    #autosuggest__input {
      outline: none;
      position: relative;
      display: block;
      font-family: monospace;
      font-size: 20px;
      border: 1px solid #616161;
      
      width: 100%;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
    }
</style>