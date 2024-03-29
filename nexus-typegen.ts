/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Expense: { // root type
    amount: number; // Int!
    category: string; // String!
    date: string; // String!
    id: number; // Int!
  }
  Income: { // root type
    amount: number; // Int!
    date: string; // String!
    id: number; // Int!
    source: string; // String!
  }
  Mutation: {};
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Expense: { // field return type
    amount: number; // Int!
    category: string; // String!
    date: string; // String!
    id: number; // Int!
  }
  Income: { // field return type
    amount: number; // Int!
    date: string; // String!
    id: number; // Int!
    source: string; // String!
  }
  Mutation: { // field return type
    addExpense: NexusGenRootTypes['Expense']; // Expense!
    addIncome: NexusGenRootTypes['Income']; // Income!
  }
  Query: { // field return type
    getExpenses: NexusGenRootTypes['Expense'][]; // [Expense!]!
    getIncomes: NexusGenRootTypes['Income'][]; // [Income!]!
  }
}

export interface NexusGenFieldTypeNames {
  Expense: { // field return type name
    amount: 'Int'
    category: 'String'
    date: 'String'
    id: 'Int'
  }
  Income: { // field return type name
    amount: 'Int'
    date: 'String'
    id: 'Int'
    source: 'String'
  }
  Mutation: { // field return type name
    addExpense: 'Expense'
    addIncome: 'Income'
  }
  Query: { // field return type name
    getExpenses: 'Expense'
    getIncomes: 'Income'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addExpense: { // args
      amount: number; // Int!
      category: string; // String!
      date: string; // String!
    }
    addIncome: { // args
      amount: number; // Int!
      date: string; // String!
      source: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}