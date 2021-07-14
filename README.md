# Further Subject

- [ ] Debugging with Chrome & vsCode

# TS Checklist

[TS Checklists](https://www.notion.so/TS-Checklists-c4eb45dabc8546f8af946b7e3ddcbc3a)

# TS Library

- [https://github.com/typestack/class-validator](https://github.com/typestack/class-validator)

# Templates

[Singleton Snippet](https://www.notion.so/Singleton-Snippet-60df1d4605124856880fdd8cda9f1808)

[My Compiler Settings](https://www.notion.so/My-Compiler-Settings-900f7a4448ad4ca8a5d90a85b77b321a)

[Name Space Compile Options](https://www.notion.so/Name-Space-Compile-Options-df7159fd12074cbd9c20f182d6810d4f)

# TS init

```bash
tsc --init
tsc
```

# Tricky Code to understand

As you learned, callback functions can return something, even if the argument on which they're passed does NOT expect a returned value

```tsx
function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: "Hi there!" });
}

sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});
```

# Section 1 - Getting Started

[What Is TypeScript?](https://www.notion.so/What-Is-TypeScript-f01e0bc193d64bf5b959bdbb9c72c3cc)

[Install Typescript and how to use TS](https://www.notion.so/Install-Typescript-and-how-to-use-TS-3c30bb0a0c6c401e9432ffe1cf8e872e)

[TypeScript Overview](https://www.notion.so/TypeScript-Overview-4c603a731e2b44adab773d7503e76257)

[vsCode Extensions](https://www.notion.so/vsCode-Extensions-f1dfc2679ab64263999d91b62df7e734)

[Typescript Project Setup](https://www.notion.so/Typescript-Project-Setup-d3aa06a4de6c4bb3b9c5d376c43a2906)

# Section 2 - TypeScript Basics & Basic Types

[Using Types](https://www.notion.so/Using-Types-719a7c2f25f44555a415060a956f7af9)

[Type assignment , Type Inference](https://www.notion.so/Type-assignment-Type-Inference-e0286b461cd14d39923adefe26d7dcba)

[Object Types ](https://www.notion.so/Object-Types-9813dbaffe7d4aa782b90502b25bbb35)

[Array Types ](https://www.notion.so/Array-Types-6d843777296846228992b2814fc27da9)

[Tuples](https://www.notion.so/Tuples-1536bcb88f264a8a84996698598f9bf9)

[Enums](https://www.notion.so/Enums-70e12877190647ee870fd8c18c65d927)

[Any Type](https://www.notion.so/Any-Type-ad1f3f618f36409ca452fc116db68241)

[Union Types](https://www.notion.so/Union-Types-f4f13fe6f5174a19aa3f679f67ba28b5)

[Literal Types](https://www.notion.so/Literal-Types-f662bedabddf4400b9c5a0f0862fc8e4)

[Type Alias](https://www.notion.so/Type-Alias-f0e146985866451e810e3dd6612ad0ff)

[More Examples on type alias](https://www.notion.so/More-Examples-on-type-alias-c02dfd403c2c44dba37df772b8f62f2f)

[Function Return Types & void](https://www.notion.so/Function-Return-Types-void-db7fca6e49974515af8ea91eb6f2f059)

[Function as types](https://www.notion.so/Function-as-types-e1a4b81ea6634b8280a45de76dfcf6b6)

[Function Types & Callbacks](https://www.notion.so/Function-Types-Callbacks-0096a73be984441da541494f67d796f9)

[Function Type Quiz](https://www.notion.so/Function-Type-Quiz-84167de5dbf14ce597f16673e2d8572f)

[unknown type ](https://www.notion.so/unknown-type-61273a3a0b3f4fd5ac8722f320886a44)

[never type ](https://www.notion.so/never-type-1f604ee6d4fc4e8d8443cee0a52f40a7)

# Section 3 - The TypeScript Compiler (and its Configuration)

[Using Watch Mode](https://www.notion.so/Using-Watch-Mode-2121d12e83724ed3a74bbc2e4831cf9f)

[Compiling Entire Project](https://www.notion.so/Compiling-Entire-Project-dcd50f9bd29b49738b17c5db6aebfc91)

[Including & Excluding Files](https://www.notion.so/Including-Excluding-Files-912840f57baf454d82210a050a5dbbd9)

[Setting a Compilation Target](https://www.notion.so/Setting-a-Compilation-Target-115d572fbfe94212981509b25dfea29b)

[Understanding TypeScript Core Libs](https://www.notion.so/Understanding-TypeScript-Core-Libs-c56a96684efc47ae8be7eac39b48b583)

[Working with sourceMap](https://www.notion.so/Working-with-sourceMap-94465e63bb174667b9ec0d79f58b9945)

[outDir, rootDir](https://www.notion.so/outDir-rootDir-3f4ce44a1cec47009c1434ff3379a0d6)

[noEmmit](https://www.notion.so/noEmmit-31224245b1ab4d46a9e69e64020acf36)

[removeComment](https://www.notion.so/removeComment-f4c3193391164a45b847b6e3b18a263b)

[downlevelIteration](https://www.notion.so/downlevelIteration-d8b29816752e461884b71941560c612e)

[noEmitOnError](https://www.notion.so/noEmitOnError-86ea126c7f9a4a73bb62028079ac1fdb)

[Clean Code Options](https://www.notion.so/Clean-Code-Options-1078f429e9c842aa9c5ef86203e0d374)

[Strict](https://www.notion.so/Strict-c55a5f79c73e41739ade9e6052efacbe)

[Debugging with vsCode](https://www.notion.so/Debugging-with-vsCode-e750886dec454499a4eae4fc660c37cc)

# Section 5 - Classes & Interfaces

- Classes are blueprints for Javascript Objects

[TS Class](https://www.notion.so/TS-Class-d0b60eeb2cd045309e84a8473b2a9db8)

["`this`" problem ](https://www.notion.so/this-problem-09bc917e9aed4b3f9a0f46923a207eac)

[TS Class with private & public](https://www.notion.so/TS-Class-with-private-public-6599497fc86847e680ce2276401b5843)

[Shorthand init](https://www.notion.so/Shorthand-init-32f97c3da418450bacc492f023039d9c)

[readonly properties](https://www.notion.so/readonly-properties-929689c1834e4486955fcfc88b00790f)

[Inheritance](https://www.notion.so/Inheritance-2292c2dc60b44718a9234d938eb0c6c1)

[Understanding protected keyword](https://www.notion.so/Understanding-protected-keyword-07167be921ea4b2cbbfb4d9c2faa7c9b)

[Getters & Setters](https://www.notion.so/Getters-Setters-83603177cfd54eb0a5ffb796323575c2)

[Static Methods & Properties](https://www.notion.so/Static-Methods-Properties-0de09b90cb114edeb981a64366931b94)

[Abstract Class ](https://www.notion.so/Abstract-Class-303cb1cd474640938bb2915b9bed5a4e)

[Singletons, Private Constructor](https://www.notion.so/Singletons-Private-Constructor-758d0a5e306c4bb4b9cef042f353a831)

[Interface](https://www.notion.so/Interface-899fe3983c6a445a9b499c82881c88fe)

[Why interfaces?](https://www.notion.so/Why-interfaces-ab970bcb527046ea883eee1f288afa4a)

[readonly properties for interface](https://www.notion.so/readonly-properties-for-interface-60a3c7268bc043da80b01e23da0e58e4)

[Extending Interfaces ](https://www.notion.so/Extending-Interfaces-d967fc3a8b4640529db5879b3a310365)

[Interfaces as Function Types](https://www.notion.so/Interfaces-as-Function-Types-1b0b6898eb134fc3a3cf24f72026957c)

[Optional Parameters](https://www.notion.so/Optional-Parameters-d324f67321464ca1aa32a341a2dbbe4d)

# Section 6 - Advanced Typing Concepts

[Advanced Types](https://www.notion.so/Advanced-Types-b68259cbad1e43e5b364a5578d76af3c)

[Intersection Types](https://www.notion.so/Intersection-Types-7075be969b8042c4a336661098b7e6f2)

[Type Guard](https://www.notion.so/Type-Guard-f10d4dc24f2e4b28bb204aa7a401c999)

[Discriminated Unions](https://www.notion.so/Discriminated-Unions-1bc4e18b3e7042be80f8356344b9bd28)

[Type Casting](https://www.notion.so/Type-Casting-ade2f04b2de84b05af02516e330f3c36)

[Index Properties, set value to interface](https://www.notion.so/Index-Properties-set-value-to-interface-7c3e74a1395941449ded727832b0e4e0)

[Function Overloads](https://www.notion.so/Function-Overloads-faaaca54bd4c43e0b4ad59bacf7ec433)

[Optional Chaining](https://www.notion.so/Optional-Chaining-76ff40d30027424597be5b9fa7969a11)

[Nullish Coalescing](https://www.notion.so/Nullish-Coalescing-af68b3eb0a794fa5bea4300840a9d7d1)

# Section 7 - Generics

[Generic Concepts](https://www.notion.so/Generic-Concepts-d65cf77be21f4cd2bab8c23f2578cbcf)

[Generic Examples](https://www.notion.so/Generic-Examples-b19c4673cb3f434696eb343b8a67a865)

[Create Generic Function](https://www.notion.so/Create-Generic-Function-f0136b1b5176468a92b50dabee96e8ea)

[Generic Constraints with "extends" keyword ](https://www.notion.so/Generic-Constraints-with-extends-keyword-ced8b9b8dd394fdba0a762ec7f31952c)

[Generic with interface](https://www.notion.so/Generic-with-interface-104259e9346a449a9b491a296aa10aae)

[The "keyof" Constraint](https://www.notion.so/The-keyof-Constraint-cf94fc9d9a614d00acd8b5f868038551)

[Generic Classes ](https://www.notion.so/Generic-Classes-0693dde69ca74b758a1065b42b4e01be)

[Generic Utility Types](https://www.notion.so/Generic-Utility-Types-58700ae5dccc48ec8636882b8684938a)

# Section 8 - Decorator

- Decorator is especially useful on meta-programming

### Class Decorator

[Basic Decorator, No Params ](https://www.notion.so/Basic-Decorator-No-Params-137d5ee2a37743c29ebe0b8bb5e277d2)

[Decorator Factory](https://www.notion.so/Decorator-Factory-997771cbf8b04740ac4775419354b0e4)

[Decorator with parameter](https://www.notion.so/Decorator-with-parameter-5ab591adfc07424d8b4050deecbbc831)

[Useful Decorator example (render something on the screen)](https://www.notion.so/Useful-Decorator-example-render-something-on-the-screen-bd447ce579b746fea81d672f93873fed)

[Multiple Decorator](https://www.notion.so/Multiple-Decorator-4f9701b79bf84782848392a82caef30f)

### Property Decorator

[Diving into Property Decorators](https://www.notion.so/Diving-into-Property-Decorators-cf899447fb9d40a984eb94327c9a0fb4)

[Accessor & Parameter for Getter & Setter Decorators](https://www.notion.so/Accessor-Parameter-for-Getter-Setter-Decorators-aafa8bf1d47a4d53aa79e2cf19ca41d6)

[Method Decorator](https://www.notion.so/Method-Decorator-c1645c5d053543e7a112af6a738c1a49)

[Method Parameter Decorator](https://www.notion.so/Method-Parameter-Decorator-6325c84784f14a3c8be5366ca223cba5)

### All decorators combined

[All combined decorators](https://www.notion.so/All-combined-decorators-663f7cb1f0824d06bf4e5cd67a50e169)

### Decorators in detail

[When decorator runs?](https://www.notion.so/When-decorator-runs-dbaa03ab3f8b4c508712ab0a4eeeee42)

[Returning (and changing) a Class in a Class Decorator ](https://www.notion.so/Returning-and-changing-a-Class-in-a-Class-Decorator-94beea7bb3124a7390ce076a89fcccaa)

[Practical Example, Autobind Decorator](https://www.notion.so/Practical-Example-Autobind-Decorator-a0507e1f22134fd48f50524ca3109be0)

[Validation With Decorators ](https://www.notion.so/Validation-With-Decorators-53d3332d0c5d43578bbbf005edbe7a13)

# Section 9 - in actions

[Interface as parameters](https://www.notion.so/Interface-as-parameters-b6b7c65986b946309bed8a0d5d46fee7)

[Autobind Decorator](https://www.notion.so/Autobind-Decorator-5a642e74ed804b74be8666034df39268)

[Typescript in practice](https://www.notion.so/Typescript-in-practice-39a97cae10734ea88f9baa0395ad93bd)

# Section 10 - Modules & Namespaces

[Writing Module Code](https://www.notion.so/Writing-Module-Code-c9090785d7a64edbbb2c6e0918409c65)

[Working with Namespcaces ](https://www.notion.so/Working-with-Namespcaces-3db6458858f34d75a8604cd89a37bb97)

[Project Example with Namespaces](https://github.com/paigeshin/TS_TUTORIAL/tree/master/mini_project_with_namespace)

[typescript with modules without framework](https://www.notion.so/typescript-with-modules-without-framework-71eb3280c8bb4b72a4c67fa897a12d2e)

[Using Various Import Syntax](https://www.notion.so/Using-Various-Import-Syntax-415dcfe89d4a430f88f44fcfbdc71dae)

# Section 11 - Webpack

[What is Webpack? ](https://www.notion.so/What-is-Webpack-f2e153e37e0c4db5b3a80024003ff787)

[Install Webpack](https://www.notion.so/Install-Webpack-73e88dbecf6642e394996c2ab95b6ab8)

[webpack configuration for development ](https://www.notion.so/webpack-configuration-for-development-38c250e0260c44a79c9d3d46b3fa6909)

[webpack for production](https://www.notion.so/webpack-for-production-ecbea3bff7fd47acb80c382fd9f570f1)

[webpack starter project template](https://github.com/paigeshin/TS_TUTORIAL/tree/master/webpack-starter-project-kit)

# Section 12 - 3rd Party Libraries & Typescript

[Popular Library for Typescript & Javascript and how to install it ](https://www.notion.so/Popular-Library-for-Typescript-Javascript-and-how-to-install-it-6a4471ccf25d451ca1cdf26ff47fc2a6)

[Declare keyword](https://www.notion.so/Declare-keyword-9fe7c8b32c0645ea98f44bcbf73a26a9)

[Class Transformer (Library Usage) ](https://www.notion.so/Class-Transformer-Library-Usage-856025af275e48ddac347c05573895b2)

[Class Validator](https://www.notion.so/Class-Validator-b364efea0a7947ef844a59bd3f18ee20)

# Section 13 - Google Map with ts

[Google Map Project](https://www.notion.so/Google-Map-Project-5d5b9c717dce44a8b077c483af7c3137)

# Section 14 - React & Typescript

[Setting Up Typescript with React ](https://www.notion.so/Setting-Up-Typescript-with-React-e2a79d9e7b5e472a85fd1b37f402a1a4)

[React-Typescript Basic Project](https://github.com/paigeshin/TS_TUTORIAL/tree/master/react-ts)

# Section 15 - Node & Typescript

[Project setup](https://www.notion.so/Project-setup-345bfb1a42104d1b93e9875237c82426)
