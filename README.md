## Usage

Install npm dependencies

    sudo npm install -g grunt-cli bower

Install project dependencies (run in project directory)
	
	bower install && npm install

Run development server (run in project directory)

	grunt

Run `bower install && npm install` whenever you pull down new changes
just in case anything new as added as a dependency.

## API

Get first page of incidents

    GET /api/incidents

Pagination

    GET /api/incidents?page=2

By default 10 items are returned. Here is how you can return more (up
to 50)

    GET /api/incidents?limit=50

These can be combined

    GET /api/incidents?page=36?limit=25

Example response

    HTTP/1.1 200 OK
    Connection: keep-alive
    Content-Length: 545
    Content-Type: application/json; charset=utf-8
    Date: Mon, 02 Mar 2015 00:37:50 GMT
    ETag: W/"221-60ce84ff"
    Vary: Accept, Accept-Encoding
    X-Powered-By: Express

    {
        "data": [
        {
            "ACTDATE": "2015-01-25T07:00:00.000Z",
            "ACTTIME": 1406,
            "ADDRESS_PUBLIC": "8000 BLK OF E EL TORO CI",
            "ADDTIME": "2015-01-25T21:07:03.000Z",
            "ADDUSER": "ILDLNK",
            "ADD_DIR_EW": "E",
            "ADD_DIR_NS": "N",
            "ADD_EW": 8000,
            "ADD_NS": 2300,
            "AGENCY": "TPD",
            "APPSTATE": "0",
            "CALL_ID": "E150250438",
            "CAPRIORITY": 9,
            "CSDISPDESC": "MISC INCIDENT",
            "CSDISPOSIT": "J",
            "DATE_FND": "2015-01-25T07:00:00.000Z",
            "DATE_OCCU": "2015-01-25T07:00:00.000Z",
            "DATE_REPT": "2015-01-25T07:00:00.000Z",
            "EMDIVISION": "ODD",
            "EMUNIT": "FSB",
            "HOUR_FND": 1406,
            "HOUR_OCCU": 1406,
            "HOUR_REPT": 1406,
            "HOWRECEIVE": "PHONE",
            "LOC_METHOD": "GEOCODE",
            "NATURECODE": "THRETH",
            "NEIGHBORHD": "T402",
            "NHA_NAME": "None",
            "NatureCodeDesc": "THREATS- CALL BACK",
            "OFFENSE": "N/A",
            "PRIMARYKEY": 1099498,
            "STATUTDESC": "N/A",
            "X": 1038755.16634,
            "Y": 456308.38353,
            "_id": "54f38111a2a1cee0031a9326"
        },
        {...},
        ],
        "has_more": true,
        "object": "list"
    }


