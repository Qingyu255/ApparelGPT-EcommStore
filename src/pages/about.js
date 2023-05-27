import Layout from "../../components/layout/Layout"

export default function about() {
  return (
    <Layout>
        <div className="px-5 pl-10">
            <h1 className="text-2xl lg:text-3xl font-bold pt-16 px-10">About</h1>
            <ul className="pt-5 max-w-3xl px-10">
                <li className="pb-2 leading-7">
                    <p>
                        This site was built as a fully AI-designed apparel ecommerce store driven by the Dall-E image generation model. This was made possible by integrating OpenAI's
                        API into the site's backend, allowing users to create and share designs based on their unique prompts.
                    </p>
                </li>

                <li className="py-4 leading-7">
                    <p>
                        The frontend built on React and Tailwind CSS with Next.js as the backend server. Implemented the MongoDB API for database operations, including CRUD operations 
                        for managing apparel data.
                    </p>
                </li>

                <li className="py-4 leading-7 underline text-blue-600 hover:text-sky-500">
                    <a href="https://github.com/Qingyu255/DallE-EcommStore">
                        Click here for Github Source Code
                    </a>
                </li>
            </ul>
        </div>
    </Layout>
  )
}
