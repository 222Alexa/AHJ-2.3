import data from '../data';
import Catalog from '../Catalog';
const table = document.querySelector('tbody');
const catalog = new Catalog(table);

catalog.redrawTable(data);

test('sorted ', () => {
    console.log(data)
const result = catalog.sortValues(data.id);
    expect(result).toBe([1047,223,27,26,25]);
  });
