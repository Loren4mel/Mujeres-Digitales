import axios from "axios";

class FetchData {
  public url: string;

  constructor(url: string) {
    this.url = url;
  }

  async get(): Promise<any> {
    const res = await fetch(this.url);
    const response = res.ok ? await res.json() : null;
    return response;
  }

  async getAxios(): Promise<any> {
    const { data } = await axios.get(this.url);
    return data;
  }
}

export default FetchData;
