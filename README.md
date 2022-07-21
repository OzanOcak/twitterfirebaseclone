### next/image Un-configured Host error :

solution : https://nextjs.org/docs/messages/next-image-unconfigured-host

### global.css @layer error :

solution first put inline utility class in jsx then wirte its utility

## talwindcss form

- https://github.com/tailwindlabs/tailwindcss-forms

- yarn add -D @tailwindcss/forms

## next-auth

- https://next-auth.js.org/getting-started/introduction

- (upgrade guide(v4)), getting started - add api route sample

- yarn add next-auth

- NEXTAUTH_URL in .env.local cz give error

- need to generate secret key to assign to NEXTAUTH_SECRET, there are are 2 ways to create

1. openssl rand -base64 32
2. https://generate-secret.vercel.app/32

- in firebase console > authentication > sign in method and enable google
- then https://console.cloud.google.com/ and create new credential to get secret and id keys

### Server Error :

- TypeError: (0 , firebase_storage**WEBPACK_IMPORTED_MODULE_2**.getApps) is not a function
- in firebase v9 getDocs should be importad from import { initializeApp ,getDocs } from "firebase/app"; but automatically it is imported from storage that causes error
