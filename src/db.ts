import {Pool} from 'pg';

const connectionString = 'postgres://cjrxjrfb:Y8v2537VE3u5m9U_DvpPox-BR5WRB7yA@tuffi.db.elephantsql.com/cjrxjrfb';

const db = new Pool ({ connectionString });

export default db;