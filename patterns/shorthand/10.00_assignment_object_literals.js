//This shorthand can help you pass and unpack data that is passed between components

//Longhand example

const observable = require('mobx/observable');
const action = require('mobx/action');
const runInAction = require ('mobx/runInAction');

const store = this.props.store;
const form = this.props.form;
const errors = this.props.errors;

//Shorthand

import { observable, action, runInAction } from 'mobx';
const { store, form, errors } = this.props;
