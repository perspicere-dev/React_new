// class Dog {
//     let name: String
//     let owner: Owner

//     constuctor(name: String) {
//         this.name = name;
//     }

//     func bark() {        
//         print("How " + this.name)
//     }

//     func delegateSomeTask() {
//         let referenceToDog = this
//         owner.takeToWalkWhenYouFindTime(dog: this, callback: function() {
//             referenceToDog.bark()
//         })

//         owner.takeToWalkWhenYouFindTime(dog: this, callback: () => {            
//             this.bark()
//         })
//     }
// }

// class Owner {

//     func takeToWalkWhenYouFindTime(dog: Dog, callback: () => Void) {
//         // wez na spacer dog
        
//         callback();
//     }
// }

// let dog1 = new Dog(name: "Burek");
// dog1.bark()

// dog1 = null

{this.state.columns.map(({key, ...columnProps}) => (
    <Column key={key} {...columnProps} />
  ))}

  
  {this.state.columns.map(someFunction)}

  function someFunction({key, ...columnProps}){
    <Column key={key} {...columnProps} />
  }
  
  function({key, ...columnProps}){
    return <Column key={key} {...columnProps} />
  }

  function(singleColumn){
    const key = singleColumn.key;
  
    const columnProps = {};
  
    for(let propName in singleColumn){
      if(propName != 'key'){
        columnProps[propName] = singleColumn[propName];
      }
    }
  
    return <Column key={key} {...columnProps} />
  }

