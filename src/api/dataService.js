import { getData } from "../services/stockage";
import { API_URL, LOGIN, USER_INFO, PATIENTS } from "./endPoints";

// fonction de login

export const login = async (name, Password) => {
  try {
    // connection au serveur via la methode fetch de l'api Fetch
    const response = await fetch(`${API_URL}/${LOGIN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        password: Password,
      }),
    });
    // on teste le status de la response
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erreur lors de la connexion :", errorData);
      throw new Error("Erreur lors de la connexion : " + errorData.message);
    }
    const resonpse = await response.json()
    console.log(resonpse)
    return resonpse;
  } catch (error) {
    console.error("Erreur lors de la requête :", error.message);
    throw new Error("Erreur lors de la requête : " + error.message);
  }
};

// fonction de récupération des informations du user
export const getUserInfo = async (token) => {
  try {
    const response = await fetch(`${API_URL}/${USER_INFO}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error(
        "Erreur lors de la récupération des informations :",
        errorData
      );
      throw new Error(
        "Erreur lors de la récupération des informations :" + errorData.message
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la requete:", error.message);
    throw new Error("Erreur lors de la requete :" + error.message);
  }
};

// recuperation des patients

export const getPatients = async () => {
  const token = await getData("newToken"); //recuperation du token
  try {
    const response = await fetch(`${API_URL}/${PATIENTS}`, {
      methode: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error(
        "Erreur lors de la recuperations de la liste des patiens",
        errorData
      );
      throw new Error(
        "Erreur lors de la recuperation de la liste des patients : " +
          errorData.message
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur survenue au niveau de la requette", error.message);
    throw new Error(
      "Erreur survenue au niveau de la requette : " + error.message
    );
  }
};
