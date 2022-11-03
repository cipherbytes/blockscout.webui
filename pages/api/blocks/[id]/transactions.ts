import type { NextApiRequest } from 'next';

import getSearchParams from 'lib/api/getSearchParams';
import handler from 'lib/api/handler';

const getUrl = (req: NextApiRequest) => {
  const searchParamsStr = getSearchParams(req);
  return `/v2/blocks/${ req.query.id }/transactions${ searchParamsStr ? '?' + searchParamsStr : '' }`;
};

const requestHandler = handler(getUrl, [ 'GET' ]);

export default requestHandler;
