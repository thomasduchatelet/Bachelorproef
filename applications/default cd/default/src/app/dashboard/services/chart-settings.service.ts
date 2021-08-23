import { Injectable } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ChartProperties } from '../models/chart-properties';
import { ChartSetting } from '../models/chart-setting';
import { ChartType, ListenerType } from '../models/chart-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ChartSettingsService {
  private readonly bar = 'bar';
  private readonly line = 'line';

  constructor() { }

  get chartSettings(): ChartSetting[]{
    let chartProperties = {
      labels: [],
      options: {responsive: true, animation: {
        duration: 1
    }} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties;

    return [
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true, animation: {
        duration: 1
    }} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'line1', listenerType: ListenerType.Temperature, type: ChartType.Line, typeString: this.line},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true, animation: {
        duration: 1
    }} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'line2', listenerType: ListenerType.Pressure, type: ChartType.Line, typeString: this.line},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true, animation: {
        duration: 1
    }} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'line3', listenerType: ListenerType.Wind, type: ChartType.Line, typeString: this.line},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true, animation: {
        duration: 1
    }} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'line4', listenerType: ListenerType.Humidity, type: ChartType.Line, typeString: this.line},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true, animation: {
        duration: 1
    }} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Bar1', listenerType: ListenerType.Temperature, type: ChartType.Bar, typeString: this.bar},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true, animation: {
        duration: 1
    }} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Bar2', listenerType: ListenerType.Pressure, type: ChartType.Bar, typeString: this.bar},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true, animation: {
        duration: 1
    }} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Bar3', listenerType: ListenerType.Wind, type: ChartType.Bar, typeString: this.bar},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true, animation: {
        duration: 1
    }} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Bar4', listenerType: ListenerType.Humidity, type: ChartType.Bar, typeString: this.bar},
    ];
  }
}
