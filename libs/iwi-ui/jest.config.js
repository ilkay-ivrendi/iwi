module.exports = {
  name: 'iwi-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/iwi-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
