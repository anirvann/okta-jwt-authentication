## JWT Information
* JSON Web Token has 3 parts - header, payload, signature; seperated by ` . ` s
* Header - base64 encoded object specifies algo to be used and type of token.
* Payload - base64 encoded obj; typically contains expiration date and any data
* Signature - hashes the header, payload & secret key using algo specified in header

### JWT - Claims Set: JSON Object whose members are claims conveyed by JWT. These can be broadly classified into 3 groups
  #### Registered Claim Names:
   * **iss claim** - Identifies the principal who issued the claim
   * **sub claim** - Identifies the principal who is the subject of the claim
   * **aud claim** - Identifies the resident that the JWT is meant for.
   * **exp claim** - Identifies the expiration date of the JWT; sys date/time must be before the exp claim; must be a number; 
   * **nbf claim** - Identifies the time before which the JWT mustnt be accepted for processing.
   * **iat claim** - identifies the time at which the JWT was issued.
   * **jti claim** - JWT ID provides 
		
  #### Public Claim Names:
		
  #### Private Claim Names:
