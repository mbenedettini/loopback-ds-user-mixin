USER MIXIN
=============

This module is designed for the [Strongloop Loopback](https://github.com/strongloop/loopback) framework.  It automatically adds `createdBy` and `updatedBy` attributes to any Model.

`createdBy` will be set to the id of the user which created the instance

`updatedBy` will be set to the id of the user which last updated the instance

This module is implemented with the `before save` [Operation Hook](http://docs.strongloop.com/display/public/LB/Operation+hooks#Operationhooks-beforesave) which requires the  loopback-datasource-juggler module greater than  [v2.23.0](strongloop/loopback-datasource-juggler@0002aaedeffadda34ae03752d03d0805ab661665).

LICENSE
=============
[ISC](LICENSE)
