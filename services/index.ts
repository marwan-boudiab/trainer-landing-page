export async function getData(currentTab: string) {
  try {
    const response = await fetch(`/api/${currentTab}/get`, { method: 'GET' });
    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function getAllData() {
  try {
    const response = await fetch(`/api/allData/get`, { method: 'GET' });
    const result = await response.json();

    if (response.ok && result.success) {
      return result.data;
    } else {
      console.log(result.message || 'Failed to fetch data');
      return null;
    }
  } catch (e) {
    console.log('An error occurred:', e);
    return null;
  }
}

export async function addData(currentTab: string, formData: Record<string, string | BenefitType[]>) {
  try {
    const response = await fetch(`/api/${currentTab}/add`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function updateData(currentTab: string, formData: Record<string, string | BenefitType[]>) {
  try {
    const response = await fetch(`/api/${currentTab}/update`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteData(currentTab: string, _id: string) {
  try {
    const response = await fetch(`/api/${currentTab}/delete`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ _id }) });
    const result = await response.json();
    // console.log(data);
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function login(formData: FormData) {
  try {
    const name = formData.get('Name');
    const password = formData.get('Password');

    const response = await fetch(`/api/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, password }) });
    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}
