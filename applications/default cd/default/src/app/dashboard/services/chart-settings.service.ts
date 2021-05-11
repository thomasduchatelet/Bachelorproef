import { Injectable } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ChartProperties } from '../models/chart-properties';
import { ChartSetting } from '../models/chart-setting';
import { ChartType } from '../models/chart-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ChartSettingsService {

  constructor() { }

  get chartSettings(): ChartSetting[]{
    let chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties;

    return [
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'line1', type: ChartType.Line},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'line2', type: ChartType.Line},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'line3', type: ChartType.Line},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'line4', type: ChartType.Line},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'line5', type: ChartType.Line},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Bar1', type: ChartType.Bar},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Bar2', type: ChartType.Bar},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Bar3', type: ChartType.Bar},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Bar4', type: ChartType.Bar},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Bar5', type: ChartType.Bar},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Scatter1', type: ChartType.Scatter},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Scatter2', type: ChartType.Scatter},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Scatter3', type: ChartType.Scatter},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Scatter4', type: ChartType.Scatter},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Scatter5', type: ChartType.Scatter},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Pie1', type: ChartType.Pie},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Pie2', type: ChartType.Pie},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Pie3', type: ChartType.Pie},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Pie4', type: ChartType.Pie},
      {properties: chartProperties = {
      labels: [],
      options: {responsive: true} as ChartOptions,
      plugins: [],
      legend: true
    } as ChartProperties, title: 'Pie5', type: ChartType.Pie}
    ];
  }
}
