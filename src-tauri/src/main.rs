// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use std::sync::Mutex;
use tauri::State;

use DashBoat::serial_com;

struct Note(Mutex<String>);

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

#[tauri::command]
fn serial() -> Vec<String> {
    serial_com::serial_ports()
        .iter()
        .map(|port| port.port_name.clone())
        .collect()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![serial])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");

}
