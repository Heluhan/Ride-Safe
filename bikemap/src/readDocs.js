const readDocs = (dbResult) => {
  const docs = [];
  dbResult.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      docs.push(data);
  });

  return docs;
};

module.exports = {
  readDocs,
};