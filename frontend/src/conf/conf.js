const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    serviceId : String(import.meta.env.VITE_SERVICE_ID),
    templateId : String(import.meta.env.VITE_TEMPLATE_ID),
    publicKey : String(import.meta.env.VITE_PUBLIC_KEY)
}

export default conf