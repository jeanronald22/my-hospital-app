import { getPatients } from "../api/dataService"

// liste des patients
export const Patients = async () => {
    try {
        const patientsList = await getPatients();
        patientsList.map(patient => {
            return patient;
        })
        
    } catch (e) { 
        console.error('erreur de recuperation ', e)
    }
}