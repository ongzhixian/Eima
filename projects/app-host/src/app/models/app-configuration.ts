export interface AppConfiguration {
    theme: string;
    language: string;
    apiUrls: { [key: string]: string }; // Dictionary type
}


// interface NestedDictionaryModel {
//     id: number;
//     name: string;
//     data: { 
//       [key1: string]: { 
//         [key2: string]: any 
//       } 
//     };
//   }

// in json
// {
//     "id": 1,
//     "name": "My Nested Model",
//     "data": {
//       "group1": {
//         "item1": "value1",
//         "item2": 123,
//         "item3": true
//       },
//       "group2": {
//         "itemA": "valueA",
//         "itemB": 456
//       }
//     }
//   }