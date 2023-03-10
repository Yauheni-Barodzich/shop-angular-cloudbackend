const {getProductsList} = require('../handlers/getProductsList');

const defaultProducts = [
  {
    "id": "1",
    "balance": "$2,127.23",
    "title": "Panasonic KX-TWilkerson",
    "description": "Fugiat anim ad consectetur sunt est in cupidatat commodo. Do adipisicing sunt consequat ad veniam. Tempor esse sunt ut deserunt id ex et ipsum. Quis commodo voluptate qui esse magna non id incididunt proident commodo sit dolore.\r\n"
  },
  {
    "id": "2",
    "balance": "$1,072.25",
    "title": "Gigaset 02 DUO",
    "description": "Non ut ad excepteur sit et eu est incididunt anim nostrud non Lorem minim. Exercitation quis ullamco magna aliqua incididunt est laboris non irure duis elit elit consequat. Anim magna qui ipsum commodo ad est occaecat eiusmod quis. Ad officia quis adipisicing eu. Culpa reprehenderit consectetur pariatur adipisicing enim aute irure.\r\n"
  },
  {
    "id": "3",
    "balance": "$1,684.52",
    "title": "Gigaset A",
    "description": "Consequat voluptate laboris cillum id ex veniam dolore. Eiusmod sint pariatur est est dolor ea commodo cillum. Anim aliquip ipsum eiusmod ut reprehenderit ad mollit reprehenderit laborum non reprehenderit consectetur anim.\r\n"
  },
  {
    "id": "4",
    "balance": "$1,003.44",
    "title": "Grandstream DP75",
    "description": "Velit occaecat elit in reprehenderit non ullamco aliquip. Aliquip ullamco ad officia commodo voluptate non eiusmod sit deserunt incididunt. Proident eu tempor veniam aliqua exercitation do fugiat duis amet laboris amet laborum. Anim quis et adipisicing ex culpa. Excepteur in cupidatat enim amet culpa consectetur et ex mollit labore in voluptate reprehenderit commodo. Non deserunt ex sunt eu irure reprehenderit et quis non cupidatat duis minim minim consequat.\r\n"
  },
  {
    "id": "5",
    "balance": "$2,061.65",
    "title": "TeXet TX-D000A",
    "description": "Est esse id dolore minim sint ea non est pariatur. Culpa deserunt anim esse non veniam anim veniam proident quis. Nulla reprehenderit laborum Lorem exercitation magna cillum non Lorem qui cillum. Ex nisi consectetur id occaecat id incididunt veniam adipisicing ullamco excepteur minim incididunt minim. Consequat sunt pariatur consequat magna do occaecat qui.\r\n"
  },
  {
    "id": "6",
    "balance": "$3,370.10",
    "title": "Binatone Fusion",
    "description": "Aute exercitation fugiat tempor ipsum incididunt et labore. Et incididunt est commodo laboris aute fugiat. Fugiat id exercitation incididunt enim nisi sit nostrud est. Labore tempor ullamco labore qui ea officia amet officia veniam elit ullamco. Reprehenderit ullamco non sunt est anim laborum et eiusmod veniam ullamco in. Sunt commodo enim consequat veniam voluptate exercitation reprehenderit quis dolore tempor irure voluptate commodo adipisicing.\r\n"
  },
  {
    "id": "7",
    "balance": "$3,610.10",
    "title": "DECT Voxtel SEL",
    "description": "Amet veniam exercitation qui tempor amet occaecat sit quis ea. Ad exercitation est amet elit fugiat ipsum aliquip amet ex ipsum ea id sint anim. Esse dolor dolore irure Lorem incididunt magna amet. Cillum in est in duis tempor exercitation est. Dolor nisi cupidatat et nostrud do mollit ullamco aute et dolore occaecat laborum eu commodo. Exercitation qui exercitation minim sunt ex adipisicing et enim. Dolore quis esse ut qui eu consectetur et incididunt sint sit do aute enim est.\r\n"
  },
  {
    "id": "8",
    "balance": "$3,000.10",
    "title": "DECT iDECT X200",
    "description": "Amet veniam exercitation qui tempor amet occaecat sit quis ea. Ad exercitation est amet elit fugiat ipsum aliquip amet ex ipsum ea id sint anim. Esse dolor dolore irure Lorem incididunt magna amet. Cillum in est in duis tempor exercitation est. Dolor nisi cupidatat et nostrud do mollit ullamco aute et dolore occaecat laborum eu commodo. Exercitation qui exercitation minim sunt ex adipisicing et enim. Dolore quis esse ut qui eu consectetur et incididunt sint sit do aute enim est.\r\n"
  }
];

describe('getProductsList handler tests', () => {
  test('getProductsList should return response with status code 200', async () => {
    const {statusCode} = await getProductsList();
    
    expect(statusCode).toBe(200);
  });

  test('getProductsList should return response with products list', async () => {
    const {body} = await getProductsList();
    const products = JSON.parse(body);
    
    expect(products).toEqual(defaultProducts);
  });
});