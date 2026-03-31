// src/services/api.ts
// Centralized API calls (do not mix with components)

import { supabase } from './supabaseClient';

// Insert sensor data
export async function insertSensorData(data: { device_id: string; type: string; value: number; timestamp?: string }) {
	const { error } = await supabase
		.from('sensor_data')
		.insert([{ ...data }]);
	return { error };
}

// Fetch sensor data (optionally by device or type)
export async function fetchSensorData({ device_id, type }: { device_id?: string; type?: string } = {}) {
	let query = supabase.from('sensor_data').select('*');
	if (device_id) query = query.eq('device_id', device_id);
	if (type) query = query.eq('type', type);
	const { data, error } = await query.order('timestamp', { ascending: false });
	return { data, error };
}

// Link device to user
export async function linkDeviceToUser({ device_id, user_id }: { device_id: string; user_id: string }) {
	const { error } = await supabase
		.from('user_devices')
		.insert([{ device_id, user_id }]);
	return { error };
}
