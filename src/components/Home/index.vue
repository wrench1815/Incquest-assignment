<template>
  <div class="container">
    <div class="card my-4">
      <div class="card-body">
        <h3>
          This Demo is an Internship Assignment submitted by Hardeep Kumar to
          Incquet solutions.
        </h3>

        <h4 class="d-flex">
          Source:
          <a
            class="text-dark ms-2"
            href="https://github.com/wrench1815/Incquest-assignment"
            target="_blank"
            ><i class="ri-github-fill"></i
          ></a>
        </h4>

        <h5>Below are some of the Insights on what is in this Demo.</h5>
        <ul>
          <li>4 Pages: Home, Login, Product List and Product detail</li>
          <ul>
            <li>
              Home: The current page containing some information what is inside
            </li>
            <li>Login: The Endpoint created as per Assignment</li>
            <li>Product List: The Endpoint created as per Assignment</li>
            <li>Product Detail: The Endpoint created as per Assignment</li>
          </ul>
        </ul>

        <h3>Tech Stack</h3>
        <ul>
          <li>
            <a href="https://v2.vuejs.org" target="_blank">Vue 2</a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/vue-axios" target="_blank"
              >axios</a
            >
          </li>
          <li>
            <a href="https://mdbootstrap.com/" target="_blank"
              >Material Design Bootstrap(MDB)</a
            >
          </li>
          <li>
            <a href="https://remixicon.com" target="_blank">Remix Icon</a>
          </li>
          <li>
            <a href="https://v3.router.vuejs.org" target="_blank"
              >Vue Router (v3)</a
            >
          </li>
          <li>
            <a href="https://v3.vuex.vuejs.org" target="_blank">Vuex (v3)</a>
          </li>
        </ul>

        <h4>
          Hosted on: <a href="https://netlify.com/" target="_blank">Netlify</a>
        </h4>

        <h3>Additional Notes:</h3>

        <p class="note note-danger">
          <span class="h5">The Login page wont work.</span>
          <br />
          <strong>Reason:</strong> The API that was told to be used for it does
          not have any CORS Policy. Therefore it does not allow any requests
          from the Browser. On the other hand when using Curl or API Clients,
          those request are not done by browsers or browser like environment so
          by nature, the CORS are ingnored. However, The login page works
          correctly, which can be tested by changing the API endpoint in the
          view. Also it was tested with my own api.
        </p>

        <p class="note note-danger">
          <strong>Login Page Validation:</strong> As per Assignment, the
          password rule were not in accordance to the API's accepted rule(which
          is just alphanumeric string) and the provided api do not use email as
          well instead it use username strategy, to make the page work, toggle
          'Bypass Validation'.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
}
</script>

<style scoped></style>
