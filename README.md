# Espruino Pico Sensor Logger

## Overview

This Espruino script is designed for logging sensor data on an Espruino Pico device. It includes functionality to sense light values using an LDR (connected to A5), log them along with timestamps, and determine sleep durations based on specific conditions.

## Getting Started

### Prerequisites

- Espruino Pico device
- LDR (Light-Dependent Resistor) connected to A5

### Setup

1. Connect the LDR to A5 on the Espruino Pico.
2. Upload the script to your Espruino Pico device.
3. Ensure the device is properly connected and powered.

### Usage

- The script will log sensor data, including light values and timestamps, into a `log.json` file.
- Sleep durations are determined based on specific conditions, such as low light values.

### Flow Chart
 ```mermaid
graph TD;
   A[Initialize Time] --> B[Update Time Every Second]
   B --> C[Read Light Sensor Data]
   C --> D[Log Data]
   D --> E[Check Light Value]
   E --> |Day| F[Sleep for 10 seconds]
   E --> |Night| G[Sleep for 1 hour]
   F --> B
   G --> B
 ```

## Configuration

Adjust the script's parameters, such as the initial time, sleep durations, and sensor thresholds, according to your preferences.
