import query from "../db/utils";

const findAll = async () => {
    return query("SELECT ClientID, ClientName, Industry, City, Country FROM clients");
  };
  
  const findOne = async (id) => {
    return query("SELECT ClientID, ClientName, Industry, City, Country FROM clients WHERE ClientID = ?", [
      id,
    ]);
  };
  
  const addOne = async (client) => {
      return await query("INSERT INTO clients SET ?", [client]);
    };
    
    const updateOne = async (id, client) => {
      return await query("UPDATE clients SET ? WHERE ClientID = ?", [
        client,
        id,
      ]);
    };
    
    const removeOne = async (id) => {
      return await query("DELETE FROM clients WHERE ClientID = ?", [id]);
    };
  
    export default {
      findAll,
      findOne,
      addOne,
      updateOne,
      removeOne,
    };