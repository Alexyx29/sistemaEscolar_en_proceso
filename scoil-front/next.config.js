// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // reactStrictMode: true,
//     // reloadOnPrerender: true,
//     ouput:'export'
//     //     images: {
//     //   unoptimized: true
//     // }
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // reloadOnPrerender: true,
    /** LOCAL **/
    /* env:{
        APP_NAME: 'SCOIL',
        PUBLIC_KEY: "h0gjKwi0iOVNVOtHXJ2F2t53Hyz41Rjgj9QssdyUWGiijuGnZqqmOgJxJfPbybh2",
        API_URL: "http://alumnos.api.localhost/api/",
        IMAGE_URL: "http://globeeducation.api.localhost/storage/",
        URL_APIS: "http://alumnos.api.localhost/api/"
    }, */
    /** PRUEBAS **/
    /* env:{
        APP_NAME: 'SCOIL',
        PUBLIC_KEY: "h0gjKwi0iOVNVOtHXJ2F2t53Hyz41Rjgj9QssdyUWGiijuGnZqqmOgJxJfPbybh2",
        API_URL: "https://testalumnosapi.nextbrain.mx/public/api/",
        IMAGE_URL: "https://testscoil.nextbrain.mx/public/storage/",
        URL_APIS: "https://testalumnosapi.nextbrain.mx/public/api/"
    }, */
    /** SCOIL DEMO **/
    env:{
        APP_NAME: 'SCOIL',
        PUBLIC_KEY: "h0gjKwi0iOVNVOtHXJ2F2t53Hyz41Rjgj9QssdyUWGiijuGnZqqmOgJxJfPbybh2",
        API_URL: "https://apisdemofrontscoil.nextbrain.mx/public/api/",
        IMAGE_URL: "https://apisdemoscoil.nextbrain.mx/public/storage/",
        URL_APIS: "https://apisdemofrontscoil.nextbrain.mx/public/api/"
    },
    images: {
        unoptimized: true
    },
    output: 'export'
}
module.exports = nextConfig