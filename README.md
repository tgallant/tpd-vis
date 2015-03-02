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
                "ADDRESS_PUBLIC": "ADDRESS_PUBLIC",
                "ADDUSER": "ADDUSER",
                "ADD_DIR_EW": "ADD_DIR_EW",
                "ADD_DIR_NS": "ADD_DIR_NS",
                "AGENCY": "AGENCY",
                "APPSTATE": "APPSTATE",
                "CALL_ID": "CALL_ID",
                "CSDISPDESC": "CSDISPDESC",
                "CSDISPOSIT": "CSDISPOSIT",
                "EMDIVISION": "EMDIVISION",
                "EMUNIT": "EMUNIT",
                "HOWRECEIVE": "HOWRECEIVE",
                "LOC_METHOD": "LOC_METHOD",
                "NATURECODE": "NATURECODE",
                "NEIGHBORHD": "NEIGHBORHD",
                "NHA_NAME": "NHA_NAME",
                "NatureCodeDesc": "NatureCodeDesc",
                "OFFENSE": "OFFENSE",
                "STATUTDESC": "STATUTDESC",
                "_id": "54f38111a2a1cee0031a9325"
            },
            {...},
        ],
        "has_more": true,
        "object": "list"
    }
