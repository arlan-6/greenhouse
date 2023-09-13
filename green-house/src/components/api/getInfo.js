const fetchData = async () => {
  try {
    const response = await fetch("http://127.0.0.1:5000/a");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    throw error; // rethrow the error to handle it elsewhere if needed
  }
};

const postData = async (data) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/postData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // const result_1 = await response.json();
  } catch (error) {
    // Handle any errors
    console.error("Error:", error);
  }
};

export { fetchData };
export { postData };
