import { sign } from "jsonwebtoken";

class GenerateTokenProvider {
  async execute(userId: string) {
    const token = sign({}, 'secret', {
      subject: userId,
      expiresIn: "20s"
    });

    return token
  }
}

export { GenerateTokenProvider }