const destroy = (key: string): void => {
  localStorage.removeItem(key);
};

const get = <T>(key: string): T | null => {
  const json = localStorage.getItem(key);
  return json ? (JSON.parse(json) as T) : null;
};

const save = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

const ServiceToken = {
  destroy,
  get,
  save,
};

export default ServiceToken;
