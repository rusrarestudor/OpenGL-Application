#version 410 core

in vec3 textureCoordinates;
out vec4 color;

uniform samplerCube skybox;

void main()
{
    vec4 fogColor = vec4(0.5f, 0.5f, 0.5f, 1.0f);
    color = 0.2 * texture(skybox, textureCoordinates) + fogColor * 0.8;
}
