import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  const html = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bitcoin OP RETURN indexing JSON API</title>
  </head>
  <body>
    <div>
      <h1>Bitcoin OP RETURN indexing JSON API</h1>
      <h2>Routes</h2>
      <table>
        <tr>
          <th>Method</th>
          <th>Route</th>
        </tr>
        <tr>
          <td>GET</td>
          <td>/opreturn/blockheight/:blockHeight</td>
        </tr>
        <tr>
          <td>GET</td>
          <td>/opreturn/blockhash/:blockHash</td>
        </tr>
        <tr>
          <td>GET</td>
          <td>/opreturn/data/:data</td>
        </tr>
      </table>
    </div>
    <footer>
      <p>Made by Gauthier Riou</p>
      <a
        rel="stylesheet"
        target="_blank"
        href="https://github.com/AliahChurch/GauthierTest"
        >GitHub</a
      >
    </footer>
  </body>
</html>
`
  res.status(200).send(html)
})

export { router as rootRouter }
